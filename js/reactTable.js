class CellReact extends React.Component{

    constructor(props){
        super(props);
        this.setState({
            cellData : props.value
        });
    }

    render(){
        return (<td>this.state.cellData</td>);
    }
}

class RowReact extends React.Component{

    constructor(props){
        super(props);
        this.setState({
            rowData : props.value
        });
    }

    renderCells(rowData){
        for(i in rowData){
            <CellReact value = {rowData[i]}/>
        }
    }

    render(){
        return (<tr>{this.renderCells(this.state.rowData)}</tr>);
    }
}

class TableReact extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
        fetch('./data/table_data.json', {mode: 'no-cors'})
        .then((response) => response.json())
        .then((findResponse) =>{
            this.setState({
                data:findResponse
            })
        })
    }

    renderRows(data){
        data.forEach(function(data){
            <RowReact value = {data}/>
        });
    }

    render(){
        return(<table>{this.renderRows(this.state.data)}</table>)
    }
}

ReactDOM.render(
    <TableReact />,
    document.getElementById('table-div')
);