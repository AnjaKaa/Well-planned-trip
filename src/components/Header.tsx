import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid, Box, Stack } from "@mui/material";
import { User, IUser } from './User';

export interface IHeaderProps {
  user: IUser;
}

export function Header({ user }: IHeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <Link
                to="/"
                style={{ textDecoration: 'none', color: 'white' }}>
                Well planned trip
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <Stack direction="row" spacing={2}>
                <Link
                  to="/plans"
                  style={{ textDecoration: 'none', color: 'white' }}>
                  plans
                </Link>
                <Link
                  to="/trips"
                  style={{ textDecoration: 'none', color: 'white' }}>
                  trips
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <User user={user} />
            </Stack>
          </Grid>

        </Grid>
      </Toolbar>

    </AppBar>
  );
}
