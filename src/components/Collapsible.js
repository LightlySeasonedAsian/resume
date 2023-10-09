import {useCollapse} from 'react-collapsed';


function Collapsible({ contentComponent,header }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
  return (
    <div className="collapsible">
        <div className="title" {...getToggleProps()}>
            
            {isExpanded ? <div>
        {header}
         <span className="icon">
    <i className="fas fa-angle-up" aria-hidden="true">
    </i>
</span>
    </div>: <div>
        {header}
         <span className="icon">
    <i className="fas fa-angle-down" aria-hidden="true">
    </i>
</span>
    </div>}
            
        </div>
        <div {...getCollapseProps()}>           
            { contentComponent }            
        </div>
    </div>
    );
  }
  export default Collapsible;