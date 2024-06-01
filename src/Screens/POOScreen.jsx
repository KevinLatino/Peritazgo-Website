import React from 'react'
import { Title, Paragraph, Space, BlueTitle, PurpleTitle, GreenTitle, RedTitle } from '../Components/PageTextsComponent'
import { BlueSection, GreenSection, PurpleSection, RedSection } from '../Components/SectionsComponent'
import { BackButton } from '../Components/BackButtonComponent'
import { CodeComponent } from '../Components/CodeComponent'
import { Accordion } from '../Components/AccordionComponent'
import Classes from '../../public/POO.jpg'

const POOScreen = () => {

    const stringClassBasic =
        `class Animal { //aquí se declara la clase
  constructor(name, specie){ //Son Atributos de la clase
   this.name = name;
   this.specie = specie;
 };
};`

    const stringMethod =
        `class Animal { //aquí se declara la clase
   constructor(name, specie){ //Atributos de la clase
    this.name = name;
    this.specie = specie;
 };
 makeSound(){ //aquí se declaran los métodos
    console.log(this.name + ' make a sound');
 };
};`

    const stringObject =
        `class Animal { // aquí se declara la clase
    constructor(name, specie) { // Atributos de la clase
    this.name = name;
    this.specie = specie;
 };
makeSound() { // Método de la clase
console.log(this.name + ' makes a sound');
 }
}
// Crear una instancia de la clase Animal
const dog = new Animal('Figo', 'Dog');
// Llamar al método makeSound en la instancia dog
dog.makeSound(); // Figo makes a sound`

    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Programación Orientada a Objetos
                </Title>
                <Paragraph>
                    Es un paradigma de programación, es decir, un modelo o un estilo de programación. Se basa en el concepto de clases y objetos. Este tipo de programación
                    se utiliza para estructurar un programa de software en piezas simples y reutilizables.
                </Paragraph>
                <Space />

                <Title>
                    Clases, métodos, objetos e instancias
                </Title>
                <Space />

                <div className='flex gap-8 '>
                    <BlueSection>
                        <BlueTitle>
                            Clases
                        </BlueTitle>
                        <Paragraph>
                            Es una plantilla que define las propiedades (atributos) y comportamientos (métodos) que tendrán los objetos creados a partir de ella.
                        </Paragraph>
                        <Space />
                        <CodeComponent codeString={stringClassBasic} />
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Métodos
                        </PurpleTitle>
                        <Paragraph>
                            Es una función definida dentro de una clase. Describe una acción que los objetos de esa clase pueden realizar.
                        </Paragraph>
                        <Space />
                        <CodeComponent codeString={stringMethod} />
                    </PurpleSection>
                </div>

                <Space />

                <div className='flex gap-8'>
                    <GreenSection>
                        <GreenTitle>
                            Objetos
                        </GreenTitle>
                        <Paragraph>
                            Un objeto es una entidad concreta que se crea a partir de una clase y que contiene tanto datos (atributos) como comportamientos (métodos). Es una instancia de una clase.
                        </Paragraph>
                        <Space />
                        <CodeComponent codeString={stringObject} />
                    </GreenSection>

                    <RedSection>
                        <RedTitle>
                            Instancias
                        </RedTitle>

                        <Paragraph>
                            Es el proceso de crear un objeto a partir de una clase. Es cuando se usa una clase para crear un objeto específico.
                        </Paragraph>
                        <Space />
                        <CodeComponent codeString={stringObject} />
                    </RedSection>
                </div>

                <Space />

                <Title>
                    Ejemplo:
                </Title>

                <Space />

                <Accordion title='Has click para ver una imágen'>
                    <img src={Classes} width={600} />
                </Accordion>

                <Space />

                <Title>
                    Principos de la POO
                </Title>

                <Space />
                
                <div className='flex gap-12'>
                    <BlueSection>
                        <BlueTitle>
                            La abstracción
                        </BlueTitle>
                        <Paragraph>
                            La abstracción consiste en enfocarse en lo esencial y ocultar los detalles complicados, se deben determinar los atributos importantes.
                        </Paragraph>
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            La encapsulación
                        </PurpleTitle>
                        <Paragraph>
                            La encapsulación consiste en proteger los datos de un objeto para que no puedan ser modificados directamente desde fuera.
                        </Paragraph>
                    </PurpleSection>
                </div>

                <Space />

                <div className='flex gap-12'>
                    <GreenSection>
                        <GreenTitle>
                            La herencia
                        </GreenTitle>
                        <Paragraph>
                            La herencia es un mecanismo que permite crear nuevas clases basadas en clases existentes, reutilizando métodos y atributos.
                        </Paragraph>
                    </GreenSection>

                    <RedSection>
                        <RedTitle>
                            El polimorfismo
                        </RedTitle>
                        <Paragraph>
                            El polimorfismo permite que la misma operación o método funcione de diferentes maneras según el objeto que lo use.
                        </Paragraph>
                    </RedSection>
                </div>
            </div>
            <BackButton />
        </>
    )
}

export { POOScreen }
