1.2.4  создать массив 3 разными способами;   выведите на экран 5 член вашего массива затем измените его значение;    выведите все элементы массива, используя цикл for 

        let arr = new Array(1,2,3,4,5);
	let arr2 = new Array(5);
        let num=[1,2,3,4,5,6,7,8];
	alert(num[5]);
        num[5]=8;
	alert(num);
	for(let n of num){
	alert(n);}
	num.forEach(alert)

		
3. узнайте длину вашего массива и выведите ее значение при наведении на любой элемент


    <body>
      <div style="width: 300px; height: 300px; margin: 0 auto; background-color: red;" onmouseover="f()"></div>
        <script>
           
         function f(){ 
             let num=[1,2,3,4,5,];
                alert(num.length);
            }
           
         </script>
    </body>



5.6.7.8. создайте 2 массива. Объедините их в один и выведите на экран полученный массив;   Удалите последний член получившегося массива и выведите это значение на экран;   Удалите последний член получившегося массива и выведите это значение на экран;    Добавьте новый элемент в начало вашего объединенного массива



        let num=[1,2,3,4,5,6,7,8,];
        let num1=[1,2,3,4,];
        let num2 = num.concat(num1);
	    alert(num2);
        num2.pop();
        num2.shift();
        alert(num2);

9.10. Получите сегодняшнюю дату и выведите ее на экран;       Выведите сегодняшнюю дату в формате 11 ноября 2020 года
      

	let date= new Date();
	alert('date'); 
        let a=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        alert(`${date.getDate()} ${a[date.getMonth()]} ${date.getFullYear()}`)
	


11. напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50


            function rand(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
            }
            function sum(a,b){
                return rand(a,b)+rand(a,b);
            }
           alert(sum(0, 50));