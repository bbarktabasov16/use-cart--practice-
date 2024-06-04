import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
		const {
			isEmpty,
			totalUniqueItems,
			items,
			totalItems,
			cartTotal,
			updateItemQuantity,
			removeItem,
			emptyCart
		} = useCart()
	
		if (isEmpty) {
			return <h2>Корзинка пуста!</h2>
		}
	return (
		<section className='py-4 container'>
			<h5>Товаров: {totalUniqueItems}, Общ. количество: {totalItems}</h5>
			<table className='table table-light table-hover m-0'>
				{
					items.map((pr, id) => {
						return (
							<tr key={id}>
								<td>
									<img src={pr.img} style={{height: '6rem'}} />
								</td>
								<td>
									{pr.title}
								</td>
								<td>
									{pr.price} сом
								</td>
								<td>
									Количество: {pr.quantity}
								</td>
								<td>
									<button className="btn btn-info ms-2" onClick={() => updateItemQuantity(pr.id, pr.quantity - 1)}>-</button>
									Кол: {pr.quantity}
									<button className="btn btn-info ms-2" onClick={() => updateItemQuantity(pr.id, pr.quantity + 1)}>+</button>
								</td>
								<td>
									<button className="btn btn-danger ms-2" onClick={() => removeItem(pr.id)}>Удалить</button>
								</td>
							</tr>
						)
					})
				}
			</table>
			<div>
				<h2>Сумма: {cartTotal} сом</h2>
			</div>
			<button className="btn btn-danger ms-2" onClick={() => emptyCart()}>Удалить всё</button>
		</section>
	)
}

export default Cart
