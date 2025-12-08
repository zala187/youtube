export const API_KEY = 'AIzaSyDdmciIw2JgnUIP1E0cr8SqC2iRAtP6-zc';

export const value_count =  (value)=>{
    if(value>=1000000){
        return Math.floor(value/100000) + "M";
    }else if(value>=1000){
        return Math.floor(value/1000) + "k";
    }
    else{
        return value;
    }
}