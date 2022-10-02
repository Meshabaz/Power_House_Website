var arr=["/img/bg4.jpg","/img/bg5.jpg","/img/bg6.jpg"]
    var i=0;
    document.body.style.backgroundImage = `url(${arr[2]})`;
    function carousel(){
        document.body.style.backgroundImage = `url(${arr[i]})`;
        console.log(document.body.style.backgroundImage);
        i++;
        if(i>=arr.length){
            i=0;
        }
    }
    setInterval("carousel()",3000);

function bmi(){
    const height=document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    const x= weight / (height/100 *height/100);
    const bmi=x.toFixed(2);
    alert(bmi);
    if(bmi<18.5){
        document.getElementById("result").innerText=`Your Body Mass Index is ${bmi}. You are Underweight. You may be at greater risk of certain health conditions, including malnutrition, osteoporosis, decreased muscle strength, hypothermia and lowered immunity. You are more likely to die at a younger age. Underweight women have less chance of becoming pregnant than women who are a healthy weight.Adding snacks.High-protein and whole-grain carbohydrate snacks can help a person gain weight.Eating several small meals a day. Sometimes a person may be underweight because they cannot tolerate eating large meals.`
    }
    if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("result").innerText=`Your Body Mass Index is ${bmi}. You are Normalweight. Good! you just need to maintain your deit by just foolowing some tips.Stay hydrated with water and avoid drinks with added sugar. Set specific, realistic goals, such as three 15-minute walks per week. If there's a break in your healthy eating or exercise, try to get back on track as quickly as possible. Keep track of what you eat in a food diary.`
    }
    if(bmi>24.9){
        document.getElementById("result").innerText=`Your Body Mass Index is ${bmi}. You are Overweight. Treatment for Overweight & Obesity: Healthy eating plan and regular physical activity. Changing your habits. Weight-management programs. Weight-loss medicines. Weight-loss devices. Bariatric surgery. Special diets.`
    }
    document.getElementById("height").value=""
    document.getElementById("weight").value=""
}