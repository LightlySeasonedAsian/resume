import {useCollapse} from 'react-collapsed';

function Collapsible({ contentComponent,header }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="title" {...getToggleProps()}>
            {isExpanded ? header : header}
        </div>
        <div {...getCollapseProps()}>
            
            { contentComponent }
                
            
        </div>
    </div>
    );
  }
  export default Collapsible;