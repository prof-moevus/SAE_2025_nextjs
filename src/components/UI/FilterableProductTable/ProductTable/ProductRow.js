export default function ProductRow({product}) {
    const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;

    return (
        <tr className="bg-amber-300">
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}