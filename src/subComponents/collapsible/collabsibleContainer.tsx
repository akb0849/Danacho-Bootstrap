import React from 'react'
import { Card } from 'react-bootstrap';
import { CustomCollapsed } from './collapsibleContainerElements'

const CollapsibleContainer = () => {
  return (
        <div>
         <CustomCollapsed eventKey="0">
          <Card.Body>
            Hello
          </Card.Body>
         </CustomCollapsed>

         <CustomCollapsed eventKey="0">
          <Card.Body>
            Hello
          </Card.Body>
         </CustomCollapsed>
        </div>
    );
}

export default CollapsibleContainer