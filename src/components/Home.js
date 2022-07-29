import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title = 'Model S'
            description = 'Order Online For Touchless Delivery'
            backgroundImg = 'model-s.jpg'
            lftBtn = 'Custom Order'
            rhtBtn= 'Existing Inventory'
        />
        <Section
            title = 'Model Y'
            description = 'Order Online For Touchless Delivery'
            backgroundImg = 'model-y.jpg'
            lftBtn = 'Custom Order'
            rhtBtn= 'Existing Inventory'
        />
        
        <Section
            title = 'Model 3'
            description = 'Order Online For Touchless Delivery'
            backgroundImg = 'model-3.jpg'
            lftBtn = 'Custom Order'
            rhtBtn= 'Existing Inventory'
        />
        <Section
            title = 'Model X'
            description = 'Order Online For Touchless Delivery'
            backgroundImg = 'model-x.jpg'
            lftBtn = 'Custom Order'
            rhtBtn= 'Existing Inventory'
        />
        <Section
            title = 'Lowest Cost Solar Panels in America'
            description = 'Money-back guarantee'
            backgroundImg = 'solar-panel.jpg'
            lftBtn = 'Order now'
            rhtBtn= 'Learn more'
        />
        <Section
            title = 'Solar for New Roofs'
            description = 'Solar Roof Cost Less Than a New Roof'
            backgroundImg = 'solar-roof.jpg'
            lftBtn = 'Order now'
            rhtBtn= 'Learn more'
        />
        <Section
            title = 'Accessories'
            description = ''
            backgroundImg = 'accessories.jpg'
            lftBtn = 'Shop Now'
            rhtBtn= ''
        />
    </Container>
  )
}

export default Home
const Container = styled.div
`
    height: 100vh;
`