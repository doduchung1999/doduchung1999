import { Product } from "./Product";
// Tạo ra các đối tượng
let product1 = new Product("Product1", 200);
let product2 = new Product("Product2", 250);
let product3 = new Product("Product3", 400);

let productArray: Product[];
productArray = [product1, product2, product3];

const discount = (discount) => (price) => price - price * discount;
// Tạo hàm để giảm giá 10% cho sản phẩm
const tenPercentDiscount = discount(0.1);
console.log("----------Thông tin sản phẩm giảm giá 10%-----------");
productArray.forEach((element) => {
  console.log(
    "Name: ",
    element.getname(),
    "Price: ",
    tenPercentDiscount(element.getprice())
  );
});
const twentyPercentDiscount = discount(0.2);
// In ra thông tin sản phẩm sau giảm giá 10 %
console.log("----------Thông tin sản phẩm giảm giá 20%-----------");
productArray.forEach((element) => {
  console.log(
    "Name: ",
    element.getname(),
    "Price: ",
    twentyPercentDiscount(element.getprice())
  );
});
