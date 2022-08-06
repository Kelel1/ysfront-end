import   Card            from '../Card';
import { gql, useQuery } from '@apollo/client';

const FETCH_ITEMS = gql`
query {
    fetchItems {
        name,
        price,
        inventoryCount,
        images,
        description,
        onHold,
        totalOnHold,
        id
    }
}
`

const StoreFront = () => {

    const result = useQuery(FETCH_ITEMS);

    if (result.loading) {
        return <div>loading...</div>
    }

   return (
    <div>
        <h2>
            Welcome to your Store Front [User]
        </h2>
        {result.data.fetchItems.map(i => <Card key={i.id} name={i.name} price={i.price}></Card>)}
    </div>
   )

}

export default StoreFront;