import { ThemeProvider } from 'styled-components'
import IndomaretTheme from '../../assets/Theme';
import { Table } from "@elevenia/master-ui/components/Atom";
import '@elevenia/master-ui/assets/index.css';
import '@elevenia/master-ui/Theme/index.css';

const TableDisplay = (props) => {
	const { data, onUpdate, onDelete } = props;
	const columns = Object.keys(data[0]);

	const createTable = () => {
		let table = []
	
		// Outer loop to create parent
		for (let i = 0; i < data.length; i++) {
			let children = []
			//Inner loop to create children
			let biodata = data[i]
			for (let j = 0; j < columns.length; j++) {
				if (columns[j] !== "password") {
					const favColor = columns[j] === "favColor" ? biodata[columns[j]].toString() : "#FFFFFF";
					const textColor = columns[j] === "favColor" ? "#DDDDDD" : "#000000";
					children.push(<td key={`${biodata["NIK"]} ${columns[j]}`}><span style={{backgroundColor: favColor, color: textColor}}>{biodata[columns[j]].toString()}</span></td>);
				}
			}
			let NIK = biodata["NIK"]
			children.push(<td key={`${NIK} actions`} className="flex flex-row">
				{/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Detail</button> */}
				<button value={NIK} onClick={(event) => onUpdate(event)} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Update</button>
				<button value={NIK} onClick={(event) => onDelete(event)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Delete</button>
			</td>)
		  //Create the parent and add the children
		  table.push(<tr key={NIK}>{children}</tr>)
		}
		return table;
	  }

    return (
        <ThemeProvider theme={IndomaretTheme}>
			<Table responsive boxShadow>
				<thead>
					<tr>
						<th>{columns[0]}</th>
						<th>{columns[1]}</th>
						<th>{columns[3]}</th>
						<th>{columns[4]}</th>
						<th>{columns[5]}</th>
						<th>{columns[6]}</th>
						<th>{columns[7]}</th>
						<th>{columns[8]}</th>
						<th>{columns[9]}</th>
						<th>{columns[10]}</th>
						<th>{columns[11]}</th>
						<th>{columns[12]}</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{createTable()}
				</tbody>
			</Table>
		</ThemeProvider>
    )
}

export default TableDisplay;
