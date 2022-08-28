import   Card            from '../Card';
import { gql, useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';

// Change name of FETCH_ITEMS to a more general name
const FETCH_ITEMS = gql`
query {
    fetchItems {
        name,
        price,
        inventoryCount,
        images,
        description,
        totalOnHold,
        id
    },
    me {
        username
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
            Welcome to your Store Front {result.data.me.username}
        </h2>
        <SimpleGrid columns={[2, null, 3]} spacing={20}>
            {result.data.fetchItems.map(i => <Card key={i.id} name={i.name} price={i.price}></Card>)}
        </SimpleGrid>
    </div>
   )

}

export default StoreFront;