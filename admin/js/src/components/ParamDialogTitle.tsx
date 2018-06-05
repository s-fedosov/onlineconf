import * as React from 'react';
import { createStyles, withStyles, DialogTitle, Typography, WithStyles } from '@material-ui/core';

const styles = createStyles({
	path: {
		overflowWrap: 'break-word',
	},
});

interface ParamDialogTitleProps {
	children: string;
	path: string;
}

const ParamDialogTitle = (props: ParamDialogTitleProps & WithStyles<typeof styles>) => (
	<DialogTitle>
		{props.children}
		<Typography variant="body1" color="textSecondary" className={props.classes.path}>{props.path}</Typography>
	</DialogTitle>
);

export default withStyles(styles)(ParamDialogTitle);
