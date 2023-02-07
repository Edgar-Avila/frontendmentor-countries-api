import { useEffect, useState } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useThemeStorePersist = create(
    persist(
        (set, get) => ({
            isDark: false,
            toggleTheme: () => {
                set({ isDark: !get().isDark })
            }
        }),
        {
            name: 'theme',
        }
    )
)

export const useThemeStore = (selector = state => state) => {
    const state = useThemeStorePersist()

    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(state.isDark)
    }, [state.isDark])

    return selector({
        toggleTheme: state.toggleTheme,
        isDark
    })
}