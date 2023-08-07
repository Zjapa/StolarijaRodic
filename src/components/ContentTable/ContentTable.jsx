import React from 'react';
import './ContentTable.scss';

const ContentTable = ({ tableContent }) => {
    return (
        <div className="table">
            <div className="table-row table-head">
                <div className="table-cell first-cell">
                    <p className="cell-text">Tip</p>
                </div>
                <div className="table-cell">
                    <p className="cell-text">Dimenzije</p>
                </div>
            </div>
            {tableContent.map((cellContent) => (
                <div key={cellContent.id} className="table-row">
                    <div className="table-cell first-cell">
                        <p className="cell-text">{cellContent.type}</p>
                    </div>
                    <div className="table-cell">
                        <p className="cell-text">{cellContent.dimension}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentTable;
