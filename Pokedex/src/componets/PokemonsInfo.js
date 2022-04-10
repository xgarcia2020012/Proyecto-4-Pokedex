import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PokemonsInfo = () => {

    const { id } = useParams();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemons(res.data))
    }, [id]);

    return (

        <div className='container'>
            <div className='location'>
                <h1>{pokemons.name}</h1>
                <img src={pokemons.sprites?.other.home.front_default} alt="" />
                <ul className='location__list'>
                    <li cl><span className='lotation_list-subtitle'> </span><p><b><i className="fas fa-bomb"></i> Attack:</b> {pokemons.stats?.[1].base_stat} K </p></li>
                    <li cl><span className='lotation_list-subtitle'> </span><b><i className="far fa-life-ring"></i> Defense:</b> {pokemons.stats?.[2].base_stat} K</li>
                    <li cl><span className='lotation_list-subtitle'> </span><b><i className="fas fa-tachometer-alt"></i> Speed:</b> {pokemons.stats?.[5].base_stat} KM</li>
                    <li cl><span className='lotation_list-subtitle'> </span><p><b><i className="fas fa-power-off"></i> Ability:</b> {pokemons.abilities?.[0].ability.name} </p></li>
                    <li cl><span className='lotation_list-subtitle'> </span><b><i className="fas fa-dumbbell"></i> Force:</b> {pokemons.stats?.[0].base_stat} K</li>




                </ul>
                <Link to='/pokemons' className='rout' ><i class="fas fa-external-link-alt"></i> Back</Link>
            </div>

        </div>

    );
};

export default PokemonsInfo;