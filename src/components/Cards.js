import { Typography, Box, makeStyles, CircularProgress, Grid } from "@material-ui/core";
import Card from './Card';

const useStyles = makeStyles({
    component: {
        margin: '50px 0',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex'
    },
    container: {
        color: '#8ACA2B',
        marginBotton: 40
    },
})

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
    const classes = useStyles();

    if (!confirmed) {
        return <CircularProgress />
    }

    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant="h4" gutterBottom>Global Cases</Typography>
            <Grid container spacing={3} justify="center">
                <Card
                    cardTitle="Infected"
                    value={confirmed.value}
                    desc="Number of Infected Cases of Covid-19"
                />
                <Card
                    cardTitle="Recovered"
                    value={recovered.value}
                    desc="Number of Recovered Cases from Covid-19"
                />
                <Card
                    cardTitle="Deaths"
                    value={deaths.value}
                    desc="Number of Deaths Caused by Covid-19"
                />
            </Grid>
        </Box>
    )
}

export default Cards;