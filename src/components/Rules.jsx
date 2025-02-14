import React from 'react'
import styled from 'styled-components';

function Rules() {
  return (
        <RulesContainer>
            <h2>How to play dice game</h2>
        <div className='rules_list'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules;


const RulesContainer = styled.div`
    background-color: #fff0f0;
    padding: 18px;
    width: 800px;
    margin: 0 auto;
    border-radius: 5px;
    margin-top: 40px;
    h2 {
        font-size: 22px;
    }

    .rules_list {
        margin-top: 18px;
    }
`;