import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import ErrorComponent from "./ErrorComponents";
import CoinCard from "./CoinCard";
import {
  Container,
  HStack,
  Button,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);
  if (error) return <ErrorComponent message={"Error while fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"} size={"lg"}>INR</Radio>
              <Radio value={"usd"} size={"lg"}>USD</Radio>
              <Radio value={"eur"} size={"lg"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} padding={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
