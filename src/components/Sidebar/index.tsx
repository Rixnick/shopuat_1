import React, { ReactElement } from 'react';
import '../../styles/_sidebar.scss';

interface Props {
  
}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="side-content col-md-3">
      <h1>Sidebar</h1>
    </div>
  )
}
