import { ThemeProvider } from 'styled-components'
import IndomaretTheme from '../../assets/Theme';
import { Button, Table } from "@elevenia/master-ui/components/Atom";
import '@elevenia/master-ui/assets/index.css';
import '@elevenia/master-ui/Theme/index.css';

const Challenge04 = () => {
	return (
		<ThemeProvider theme={IndomaretTheme}>
			<Table responsive boxShadow>
				<thead>
					<tr>
						<th>Head 1</th>
						<th>Head 2</th>
						<th>Head 3</th>
						<th>Head 4</th>
						<th>Head 5</th>
						<th>Head 6</th>
						<th>Head 7</th>
						<th>Head 8</th>
						<th>Head 9</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>test 1</td>
						<td>test 2</td>
						<td>test 3</td>
						<td>test 4</td>
						<td>test 5</td>
						<td>test 6</td>
						<td>test 7</td>
						<td>test 8</td>
						<td>test 9</td>
					</tr>
					<tr>
						<td>test 1</td>
						<td>test 2</td>
						<td>test 3</td>
						<td>test 4</td>
						<td>test 5</td>
						<td>test 6</td>
						<td>test 7</td>
						<td>test 8</td>
						<td>test 9</td>
					</tr>
					<tr>
						<td>test 1</td>
						<td>test 2</td>
						<td>test 3</td>
						<td>test 4</td>
						<td>test 5</td>
						<td>test 6</td>
						<td>test 7</td>
						<td>test 8</td>
						<td>test 9</td>
					</tr>
					<tr>
						<td>test 1</td>
						<td>test 2</td>
						<td>test 3</td>
						<td>test 4</td>
						<td>test 5</td>
						<td>test 6</td>
						<td>test 7</td>
						<td>test 8</td>
						<td>test 9</td>
					</tr>
				</tbody>
			</Table>
			<Button>Click me!</Button>
		</ThemeProvider>
	)
}

export default Challenge04;