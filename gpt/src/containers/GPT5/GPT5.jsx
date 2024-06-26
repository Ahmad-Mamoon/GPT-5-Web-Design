import React from 'react'
import './gpt5.css'
import Feature from '../../components/feature/Feature';

const GPT5 = () => {
  return (
    <div className="gpt5__whatgpt5 section__margin" id="gpt5">
      <div className="gpt5__whatgpt5-feature">
        <Feature title="What is GPT-5"/>
      </div>
      <div className="gpt5__whatgpt5-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt5__whatgpt5-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default GPT5
