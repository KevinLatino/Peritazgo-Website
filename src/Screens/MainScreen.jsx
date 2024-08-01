import React from 'react';
import { MainTitle } from '../Components/MainTitleComponent';
import { CardComponent } from '../Components/CardComponent';
import { SearchBar } from '../Components/SearchBarComponent';
import { useState } from 'react';
import { nfd } from 'unorm';
import {
    Binary,
    Briefcase,
    Code,
    Layout,
    Server,
    Network,
    Shield,
    Lightbulb,
    Rocket,
    Terminal,
    Monitor,
    Database,
    Layers,
    Cpu,
} from 'lucide-react';
import 'animate.css';

const MainScreen = () => {

    const arrayTopics = [

        {
            id: 1,
            title: 'Tecnologías de la información',
            description: 'Explora el vasto mundo de las tecnologías de la información, incluyendo redes, sistemas operativos y ciberseguridad.',
            route: '/tecnología',
            icons: [
                <Network size={27} className='text-[#5cafad] p-0.5 m-1 ' />,
                <Server size={27} className='text-[#5cafad] p-0.5 m-1' />,
                <Shield size={27} className='text-[#5cafad] p-0.5 m-1' />,
            ],
        },

        {
            id: 2,
            title: 'Emprendimiento e innovación',
            description: 'Descubre cómo iniciar y hacer crecer tu propio negocio con técnicas de innovación y estrategias empresariales.',
            route: '/innovación',
            icons: [
                <Briefcase size={27} className='text-icon_color p-0.5 m-1' />,
                <Lightbulb size={27} className='text-icon_color p-0.5 m-1' />,
                <Rocket size={27} className='text-icon_color p-0.5 m-1' />,
            ],
        },

        {
            id: 3,
            title: 'Programación Web',
            description: 'Aprende las bases de la programación, POO, Estructuras de Control, Estructuras de datos y más.',
            route: '/WebDev',
            icons: [
                <Code size={27} className='text-icon_color p-0.5 m-1' />,
                <Binary size={27} className='text-icon_color p-0.5 m-1' />,
                <Monitor size={27} className='text-icon_color p-0.5 m-1' />,
            ],
        },

        {
            id: 4,
            title: 'Diseño de Software',
            description: 'Conoce los principios de diseño de software y cómo aplicarlos para crear aplicaciones eficientes y mantenibles.',
            route: '/Diseño',
            icons: [
                <Layout size={27} className='text-icon_color p-0.5 m-1' />,
                <Layers size={27} className='text-icon_color p-0.5 m-1' />,
                <Cpu size={27} className='text-icon_color p-0.5 m-1' />,
            ],
        },

        {
            id: 5,
            title: 'Soporte TI',
            description: 'Obtén habilidades para proporcionar soporte técnico y resolver problemas en entornos de TI.',
            route: '/Soporte',
            icons: [
                <Database size={27} className='text-icon_color p-0.5 m-1' />,
                <Server size={27} className='text-icon_color p-0.5 m-1' />,
                <Monitor size={27} className='text-icon_color p-0.5 m-1' />,
            ],
        },
    ];

    const [topic, setTopic] = useState(arrayTopics);
    const [search, setSearch] = useState('');

    const searchTopic = topic.filter(topic =>
        (topic.title).toLowerCase().includes(nfd(search).toLowerCase())) ||
        (topic.description).toLowerCase().includes(nfd(search).toLowerCase());

    return (
        <>
            <div className='flex justify-normal items-center flex-col animate__animated animate__fadeInDown'>
                <MainTitle>
                    Temas de Peritazgo 2024
                </MainTitle>
                <SearchBar search={search} setSearch={setSearch} />
                <div className='flex flex-wrap items-center justify-center gap-x-36 gap-y-16 p-8'>
                    {searchTopic.map(renderTopic => (<CardComponent
                        key={renderTopic.id}
                        route={renderTopic.route}
                        title={renderTopic.title}
                        description={renderTopic.description}
                        icons={renderTopic.icons}
                    />))}
                </div>
            </div>
        </>
    )
}

export default MainScreen;
