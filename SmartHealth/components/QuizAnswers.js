import React, {useState}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const NavButtons = (props) => {

    return(
        <View style={styles.navContainer}>
        
        <TouchableOpacity
            onPress={props.onBack}
            style={styles.btn}
        >
                <Text style={styles.btnTxt}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.btn}
            onPress={props.onNext}
        >
                <Text style={styles.btnTxt}>Next</Text>
           </TouchableOpacity>

        </View>
    )
}


const QuizAnswers = (props) => {

    const [option, setOption] = useState([false,false,false,false]);
    const [previous, setPrevious] = useState(-1);


    const handleSelection = (index) => {
        
        if(previous == -1){
            setPrevious(index);
        }
        
        else{
            option[previous] = false;
            setPrevious(index);
        }
        
       option[index] = true;
       props.onSetAnswer(index);

     }

     const handleNewQuestion = () => {
        
        //if the user hasnt answered yet
        if(props.results[props.count + 1] === undefined){
            setOption([false,false,false,false]);
            setPrevious(-1);
            props.onSaveAnswer(0);
        }

        else{
            const replace = previous;
            setPrevious(-1);
            handleSelection(props.results[props.count + 1]);
            props.onSaveAnswer(1,replace);
        }
        
     }

     const handleBack = () => {
         //geeting last answer
         if(props.count > 0){
            const lastOption = props.results[props.count-1];
            setPrevious(-1);
            handleSelection(lastOption);
            props.onBack();
         }
    }


    return(

        <View style={styles.answerContainer}>

                <TouchableOpacity 
                onPress={() => handleSelection(3) }
                style={option[3] === true ? styles.selected : styles.unselected}
                >
                    <Text style={styles.option}>Nearly Every Day</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => handleSelection(2) }
                style={option[2] === true ? styles.selected : styles.unselected}>
                    <Text style={styles.option}>More Than Half The Days</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => handleSelection(1) }
                 style={option[1] === true ? styles.selected : styles.unselected}>
                    <Text style={styles.option}>Several Days</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => handleSelection(0) }
                style={option[0] === true ? styles.selected : styles.unselected}>
                    <Text style={styles.option}>Not At All</Text>
                </TouchableOpacity>

                
        <NavButtons onBack={handleBack} onNext={handleNewQuestion}/>

 </View>



    )
}

const styles =  StyleSheet.create({
  
    answerContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', 
        marginVertical: 16,
        flex: 1,
      },
      selected:{
          paddingVertical: 12,
          marginVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 12,
          width: '100%',
          backgroundColor: 'green',
      },
      unselected:{
        paddingVertical: 12,
        marginVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        width: '100%',
        backgroundColor: '#34A0A4',
    },
        option: {
            fontSize: 20,
            fontWeight: '700',
            color: 'white'
        },
        btn: {
            backgroundColor: '#1A759F',
            padding: 20,
            borderRadius: 16,
            alignItems: 'center',
            marginBottom: 50,
          },
          navContainer: {
            flexDirection: 'row',    
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginVertical: 40,        
       },

       

    });


export default QuizAnswers;