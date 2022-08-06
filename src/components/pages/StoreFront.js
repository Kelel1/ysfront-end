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

   return (
    <div>
        <h2>
            Welcome to your Store Front [User]
        </h2>
        <Card></Card>
    </div>
   )

}

export default StoreFront;