import React, { Component } from 'react';
import  './Challenge_3.css';

class TodoItem extends Component {
    render() {

        const {done, children, priority,onToggle, onRemove} = this.props;

        return (
            <div className='tood-item' onClick={onToggle}>
                <input className='tick' type='checkbox' checked={done} readOnly/>
                <div className={('text', {done})}>{children}</div>
                <div className='priority'>{priority}</div>
                <div className='delete' onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }
            }>[삭제]</div>
                
            </div>
        );
    }
}



export default TodoItem;