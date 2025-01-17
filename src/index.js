const { registerBlockType } = wp.blocks;

registerBlockType( 'custom-guten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},

	edit: (props)=> {
		console.log(props);
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		return (
			<div className={ className }>
				<h2>Input Text Example</h2>
				<p>
					<input
						type="text"
						value={ content }
						onChange={ ( event ) => onChangeContent( event.target.value ) }
					/>
				</p>
			</div>
		);
	},
	save: (props)=> {
		return <p>{ props.attributes.content }</p>;
	},
} );