import { Button, HStack} from '@chakra-ui/react';
import React from 'react';
 import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={"4"} shadow={"2xl"} bgColor={"blackAlpha.900"} justifyContent={"space-around"}  >
        <Button variant={"unstyled"} color={"gold"} size={"lg"}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"gold"} size={"lg"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"gold"} size={"lg"}>
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header;
