/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	  // "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // Add this line if needed
	],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
				moveButak: {
					'0%': {opacity: '1', transform: 'translate(-81vw, 0vh)' },
					'100%': {opacity: '1', transform: 'translate(0)' },
				},

    			slideInCustom: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate(-20vw, 0vh)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate(0, 0)'
    				}
    			},
    			scaleUp: {
    				'0%': {
    					transform: 'scale(0.75)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'scale(1)',
    					opacity: '1'
    				}
    			},
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			slideIn: {
    				'0%': {
    					transform: 'translateX(-50%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateX(0)',
    					opacity: '1'
    				}
    			},
    			slideInLeft: {
    				'0%': {
    					transform: 'translateX(-50%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateX(0)',
    					opacity: '1'
    				}
    			},
    			slideInBottom: 
				{
    				'0%': {transform: 'translateY(100%)', opacity: '0'},
    				'20%': {opacity: '0.5'},
					'40%': {opacity: '0.7'},
    				'60%': {opacity: '0.7'},
    				'100%': {transform: 'translateY(0)', opacity: '1'}
    			},
				slideInUp: 
				{
    				'0%': {transform: 'translateY(-100%)', opacity: '0'},
    				'20%': {opacity: '0.5'},
					'40%': {opacity: '0.7'},
    				'60%': {opacity: '0.7'},
    				'100%': {transform: 'translateY(0)', opacity: '1'}
    			},
    			slideInCustomX: {
    				'0%': {
    					transform: 'translateX(-100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateX(0)',
    					opacity: '1'
    				}
    			},
    			slideInCustomY: {
    				'0%': {
    					transform: 'translateY(100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			slideInMixed: {
    				'0%': {
    					transform: 'translate(-100%, 50%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translate(0, 0)',
    					opacity: '1'
    				}
    			},
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
    			}
    		},
    		animation: {
    			fadeIn: 'fadeIn 0.5s ease-in-out',
    			slideInLeft: 'slideInLeft 0.5s ease-out',
    			slideInCustom: 'slideInCustom 1s ease-out',
    			slideInBottom: 'slideInBottom 1.5s ease-out',
    			slideInUp: 'slideInUp 1.5s ease-out',
    			slideInCustomX: 'slideInCustomX 0.8s ease-out',
    			slideInCustomY: 'slideInCustomY 0.8s ease-out',
    			slideInMixed: 'slideInMixed 0.8s ease-out',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
				moveButak: 'moveButak 12s ease-out'
    		},
    		transitionDelay: {
    			'0': '0ms',
    			'200': '200ms',
    			'400': '400ms',
    			'600': '600ms',
    			'800': '800ms',
    			'1000': '1000ms',
    			'1200': '1200ms',
    			'1400': '1400ms',
    			'1600': '1600ms',
    			'1800': '1800ms',
    			'2000': '2000ms'
    		},
			transitionDuration: {
				'2000': '2000ms', // You can now use duration-2000
			  },
    	}
    },
	plugins: [
	  require("tailwindcss-animate"),
	//   require("tailwind-scrollbar-hide"),
	  require("tailwind-scrollbar"),
	  
	],
  };
  