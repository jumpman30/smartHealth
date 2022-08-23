-- MariaDB dump 10.19  Distrib 10.6.4-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: smartHealth
-- ------------------------------------------------------
-- Server version	10.6.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `id_answer` int(10) NOT NULL AUTO_INCREMENT,
  `answer` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_question` int(10) DEFAULT NULL,
  `id_user_quiz` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_answer`),
  KEY `answer_FK` (`id_question`),
  KEY `answer_FK_1` (`id_user_quiz`),
  CONSTRAINT `answer_FK` FOREIGN KEY (`id_question`) REFERENCES `question` (`id_question`),
  CONSTRAINT `answer_FK_1` FOREIGN KEY (`id_user_quiz`) REFERENCES `userQuiz` (`id_user_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'0',1,1),(2,'1',2,1),(3,'3',3,1),(4,'0',4,1),(5,'1',5,1),(6,'2',6,1),(7,'3',7,1),(8,'0',8,1),(9,'1',9,1),(10,'2',10,1),(11,'3',11,1),(12,'0',12,1),(13,'1',13,1),(14,'2',14,1),(15,'3',15,1),(16,'0',16,1),(17,'1',17,1),(18,'2',18,1),(19,'3',19,1),(20,'0',20,1),(21,'3',21,1),(45,'0',4,35),(46,'3',3,35),(47,'1',2,35),(48,'1',1,35),(49,'1',6,35),(50,'2',5,35),(51,'0',7,35),(52,'0',10,35),(53,'1',8,35),(54,'2',9,35),(55,'1',12,35),(56,'1',11,35),(57,'2',13,35),(58,'2',14,35),(59,'2',17,35),(60,'1',15,35),(61,'3',16,35),(62,'0',18,35),(63,'1',21,35),(64,'1',19,35),(65,'2',20,35);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_moods`
--

DROP TABLE IF EXISTS `daily_moods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_moods` (
  `id_daily` int(11) NOT NULL AUTO_INCREMENT,
  `social_mood` int(11) NOT NULL,
  `health_mood` int(11) NOT NULL,
  `sleep_mood` int(11) NOT NULL,
  `overall_mood` int(11) NOT NULL,
  `note` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_daily`),
  KEY `Daily_Mood_FK` (`id_user`),
  CONSTRAINT `Daily_Mood_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_moods`
--

LOCK TABLES `daily_moods` WRITE;
/*!40000 ALTER TABLE `daily_moods` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_moods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goals`
--

DROP TABLE IF EXISTS `goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goals` (
  `id_goal` int(11) NOT NULL AUTO_INCREMENT,
  `type_goal` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `frequency` int(11) DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_goal`),
  KEY `goals_FK` (`id_user`),
  CONSTRAINT `goals_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goals`
--

LOCK TABLES `goals` WRITE;
/*!40000 ALTER TABLE `goals` DISABLE KEYS */;
/*!40000 ALTER TABLE `goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id_question` int(10) NOT NULL AUTO_INCREMENT,
  `question` varchar(350) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question_number` int(10) DEFAULT NULL,
  `id_quiz` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_question`),
  KEY `question_FK` (`id_quiz`),
  CONSTRAINT `question_FK` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Tive dificuldades em me acalmar',1,1),(2,'Senti a minha boca seca',2,1),(3,'Não consegui sentir nenhum sentimento positivo',3,1),(4,'Senti dificuldades em respirar',4,1),(5,'Tive dificuldade em tomar iniciativa para fazer coisas',5,1),(6,'Tive tendência a reagir em demasia em determinadas situações',6,1),(7,'Senti tremores (por ex., nas mãos)',7,1),(8,'Senti que estava a utilizar muita energia nervosa',8,1),(9,'Preocupei-me com situações em que podia entrar em pânico e fazer figura ridícula',9,1),(10,'Senti que não tinha nada a esperar do futuro',10,1),(11,'Dei por mim a ficar agitado',11,1),(12,'Senti dificuldade em me relaxar',12,1),(13,'Senti-me desanimado e melancólico',13,1),(14,'Estive intolerante em relação a qualquer coisa que me impedisse de terminar aquilo que estava a fazer',14,1),(15,'Senti-me quase a entrar em pânico',15,1),(16,'Não fui capaz de ter entusiasmo por nada',16,1),(17,'Senti que não tinha muito valor como pessoa',17,1),(18,'Senti que por vezes estava sensível',18,1),(19,'Senti alterações no meu coração sem fazer exercício físico',19,1),(20,'Senti-me assustado sem ter tido uma boa razão para isso',20,1),(21,'Senti que a vida não tinha sentido',21,1),(22,'Feeling nervous, anxious, or on edge',1,2),(23,'Not being able to stop or control worrying',2,2),(24,'Worrying too much about different things',3,2),(25,'Trouble relaxing',4,2),(26,'Being so restless that it is hard to sit still',5,2),(27,'Becoming easily annoyed or irritable',6,2),(28,'Feeling afraid, as if something awful might happen',7,2);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `id_quiz` int(10) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,'EADS-21','EADS'),(2,'GAD-7','GAD');
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userQuiz`
--

DROP TABLE IF EXISTS `userQuiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userQuiz` (
  `id_user_quiz` int(10) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `result` int(10) DEFAULT NULL,
  `id_user` int(10) DEFAULT NULL,
  `id_quiz` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_user_quiz`),
  KEY `userQuiz_FK` (`id_user`),
  KEY `userQuiz_FK_1` (`id_quiz`),
  CONSTRAINT `userQuiz_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `userQuiz_FK_1` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userQuiz`
--

LOCK TABLES `userQuiz` WRITE;
/*!40000 ALTER TABLE `userQuiz` DISABLE KEYS */;
INSERT INTO `userQuiz` VALUES (1,'2022-02-27',37,74,1),(7,'2022-03-23',20,80,1),(35,'2022-04-07',27,191,1);
/*!40000 ALTER TABLE `userQuiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `occupation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `password_2` (`password`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (74,'Tiago','Santos','Masculino','ttas97@gmail.com','2yu8Ya51lH6djDzv5T5YhkT8CvfLyxJSk8U0FYL+pV8=','Cantor',25,'1986-02-06','Porto',1),(80,'João','Santos','Masculino','jonasg97@gmail.com','jDpF35cVg9tb8ZKSlHp9i8tNblBvtMdmN19KAH/W4QU=','Estudante',24,NULL,'Porto',1),(191,'Joao','Santos','M','Joaos','+q96vHpV0fZ/1xgeYsxRtS00vYjxpV7AtwVEY5n2YmE=',NULL,24,NULL,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 13:49:01
