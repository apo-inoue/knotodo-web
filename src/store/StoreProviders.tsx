import React, { FC } from 'react';
import { CategoryProvider } from '../containers/providers/category';
import { TodoProvider } from '../containers/providers/todo';
import { CustomThemeProvider } from '../theme/provider';
import { SortFilterProvider } from '../containers/providers/sortFilter';
import { ColorProvider } from '../containers/providers/color';
import { CustomApolloProvider } from './CustomApolloProvider';

export const StoreProviders: FC = ({ children }) => {
  return (
    <CustomApolloProvider>
      <CustomThemeProvider>
        <ColorProvider>
          <CategoryProvider>
            <TodoProvider>
              <SortFilterProvider>{children}</SortFilterProvider>
            </TodoProvider>
          </CategoryProvider>
        </ColorProvider>
      </CustomThemeProvider>
    </CustomApolloProvider>
  );
};
