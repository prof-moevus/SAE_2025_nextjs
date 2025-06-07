import ProductTable from "@/components/UI/FilterableProductTable/ProductTable/ProductTable";
import SearchBar from "@/components/UI/FilterableProductTable/SearchBar/SearchBar";


export default function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}