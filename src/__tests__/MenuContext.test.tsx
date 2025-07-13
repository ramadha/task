import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { MenuProvider, useMenuContext } from '../context/MenuContext';

describe('MenuContext', () => {
  it('toggles menu state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MenuProvider>{children}</MenuProvider>
    );
    const { result } = renderHook(() => useMenuContext(), { wrapper });

    expect(result.current.isMenuOpen).toBe(false);

    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      result.current.closeMenu();
    });
    expect(result.current.isMenuOpen).toBe(false);
  });
});
