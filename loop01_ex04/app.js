let a = 0;
let b = 1;
let c;
while (b % 5 !==0) {
    c = b;
    b = b + a;
    a = c;
    console.log(b);
}
alert("Số đầu tiên chia hết cho 5 là: " + b);