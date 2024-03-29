import React from 'react';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Link} from 'react-router-dom';
const styles: any = (theme: any) => {
	return {
		listItem: {
			'&:hover $listItemActions': {
				display: 'block !important'
			}
		},
		item: {
			display: 'flex'
		},
		listItemActions: {
			display: 'none'
    },
    itemLink: {
      paddingLeft:'20px',
      textDecoration: 'none',
      color: 'wheat',
      '&:hover': {
        color: 'white'
      }
    },
	};
};
const theme_override = createMuiTheme({
	overrides: {
		MuiTypography: {
			subheading: {
				color: 'wheat'
			}
		}
	}
});

const GroupChild = (props) => {
	const { classes, groupItem, wrapStyles = {}, setIsOpenGroupChild, isOpenGroupChild } = props;

	const isEmptyFields = isEmpty(get(groupItem, 'childs', []));
	return (
		<MuiThemeProvider theme={theme_override}>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => {
					setIsOpenGroupChild({
						...isOpenGroupChild,
						[groupItem.name]: !isOpenGroupChild[groupItem.name]
					});
				}}
			>
				<div className={classes.item} style={wrapStyles}>
					{isEmptyFields ? (
						<div style={{ padding: '7px' }} />
					) : isOpenGroupChild[groupItem.name] ? (
						<ExpandMore style={{ width: '15px' }} />
					) : (
						<ExpandLess style={{ width: '15px' }} />
					)}
					{/* <ListItemText primary={groupItem.name} /> */}
					<Link to='/dashboard/test' className={classes.itemLink}>
						{groupItem.name}
					</Link>
				</div>
			</ListItem>
		</MuiThemeProvider>
	);
};

export default withStyles(styles, { withTheme: true })(GroupChild);
