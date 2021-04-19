import Box from './Box/Box';
import { users, devices } from './Data';

import './Interview.css';

function Interview() {
  return (
    <div className='interview-container'>
      <Box items={users} listName='Users' bg='bg-greenyellow' />
      <Box
        items={devices}
        listName='Devices'
        bg='bg-blue'
        boxType='box-horizontal'
      />
    </div>
  );
}

export default Interview;
