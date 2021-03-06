import React from 'react';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';

var ColorColumn = React.createClass({
	displayName: 'ColorColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
		showText: React.PropTypes.bool,
	},
	renderValue () {
		const value = this.props.data.fields[this.props.col.path];
		if (!value) return null;

		const colorBoxStyle = {
			backgroundColor: value,
			borderRadius: 3,
			display: 'inline-block',
			height: 18,
			marginRight: 10,
			verticalAlign: 'middle',
			width: 18,
		};
		if (this.props.col.field.col.showText)
			return (
				<ItemsTableValue truncate={false} field={this.props.col.type}>
			<div style={{ lineHeight: '18px' }}>
	<span style={colorBoxStyle} />
		<span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{value}</span>
		</div>
		</ItemsTableValue>
			)
		else
			return(
				<ItemsTableValue truncate={false} field={this.props.col.type}>
			<div style={{ lineHeight: '18px' }}>
	<span style={colorBoxStyle} />
		</div>
		</ItemsTableValue>
			);
	},
	render () {
		return (
			<ItemsTableCell>
				{this.renderValue()}
			</ItemsTableCell>
		);
	},
});

module.exports = ColorColumn;
