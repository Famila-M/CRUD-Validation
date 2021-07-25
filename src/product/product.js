import ProductCreate from "./productcreate";
import ProductEdit from "./productedit";
import ProductList from "./productlist";


export default function Product() {
    return <>
    <div class="row">
        <ProductCreate></ProductCreate>
    </div>
    <div class="row">
        <ProductEdit></ProductEdit>
    </div>
    <div class="row">
        <ProductList></ProductList>
    </div>
    </>
}