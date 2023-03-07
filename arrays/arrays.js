// const array = ["Juan", "Ana", "Diego"]; // Array normal JS

// console.log(array.length);
// array.push("maria");
// console.log(array.length);

    class MyArray {
        constructor(){
            this.length = 0;
            this.data = {}
        }

        get(index) {
            return this.data[index];
        }
        push(item) {
            this.data[this.length] = item;
            this.length++;
            return this.data;
        }
        pop(){
            const lastItem = this.data[(this.length) - 1];
            delete this.data[(this.length) - 1];
            this.length--;
            return lastItem;
        }
        delete(index){
            const item = this.data[index];
            this.shiftIndex(index)

            return item;
        }
        shiftIndex(index){
            for (let i = index; i < this.length - 1; i++){
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1];
            this.length--;
        }
    }

    const myArray = new MyArray();

console.log(myArray);
myArray.push("Juan");
console.log(myArray);
myArray.push("Camilo");
console.log(myArray);
myArray.push("Lopez");
console.log(myArray);

console.log(myArray.get(1));        //Método Get

console.log(myArray.pop()); 

myArray.push("Diego");

myArray.push("Granda");

console.log(myArray);

console.log(myArray.delete(2));
console.log(myArray);


