import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Logo-based color palette
				'gep-blue': {
					50: '#E6F2F7',
					100: '#B3D9E6',
					200: '#80C0D5',
					300: '#4DA7C4',
					400: '#1A8EB3',
					500: '#1B4B5C',
					600: '#164049',
					700: '#113437',
					800: '#0C2824',
					900: '#071C12'
				},
				'gep-green': {
					50: '#F0F8E8',
					100: '#D4EBBF',
					200: '#B8DE96',
					300: '#9CD16D',
					400: '#80C444',
					500: '#7DB343',
					600: '#649036',
					700: '#4B6D29',
					800: '#324A1C',
					900: '#19270F'
				},
				'gep-orange': {
					50: '#FDF4E8',
					100: '#F8E0BF',
					200: '#F3CC96',
					300: '#EEB86D',
					400: '#E9A444',
					500: '#E67E22',
					600: '#B8651B',
					700: '#8A4C14',
					800: '#5C330D',
					900: '#2E1A06'
				},
				'gep-teal': {
					50: '#E6F7F5',
					100: '#B3E8E3',
					200: '#80D9D1',
					300: '#4DCABF',
					400: '#1ABBAD',
					500: '#0f7378',
					600: '#0C5C60',
					700: '#094548',
					800: '#062E30',
					900: '#031718'
				}
			},
			fontFamily: {
				'primary': ['Myriad Pro', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'count-up': {
					'0%': { opacity: '0', transform: 'scale(0.5)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'count-up': 'count-up 0.8s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gep-gradient': 'linear-gradient(135deg, #1B4B5C 0%, #7DB343 100%)',
				'gep-hero': 'linear-gradient(135deg, #1B4B5C 0%, #0f7378 50%, #7DB343 100%)',
				'gep-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;