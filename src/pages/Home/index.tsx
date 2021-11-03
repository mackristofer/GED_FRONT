import React, {useState} from "react";
import {SafeAreaView,ScrollView } from "react-native";
import RenderCliente from "./components/RenderCliente";
import { Cliente } from "./type/Cliente";


const Home = () => {

    const [lista, setLista] = useState<Cliente[]>([
        {
            id: 1,
            nome: "Carlos",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos1",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos2",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos3",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos4",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos5",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos6",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos7",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos8",
            telefone: "1234"
        },
        {
            id: 1,
            nome: "Carlos9",
            telefone: "1234"
        }
    ]);

    return(
        <SafeAreaView>
            <ScrollView>
                {lista.map((Cliente, index) => (<RenderCliente key={index} cliente={Cliente} />))}
            </ScrollView>
       </SafeAreaView>
    );
}

export default Home;