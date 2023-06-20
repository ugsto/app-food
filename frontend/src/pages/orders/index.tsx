import {Title} from '@/components/title';
import {type Order} from '@/models/order';
import React, {useEffect} from 'react';

export function OrdersPage() {
	const [orders, setOrders] = React.useState<Order[]>([]);

	useEffect(() => {
		fetchOrders().catch(console.error);
	});

	async function fetchOrders() {
		setOrders(await fetchOrders());
	}

	return <Title>Orders</Title>;
}
