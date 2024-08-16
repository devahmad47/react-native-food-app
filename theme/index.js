const colorPalette = [
    {
        name: 'orange',
        text: '#f97316', // Orange text color
        bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`, // Orange background color with opacity
    },
    {
        name: 'darkGray',
        text: '#4B5563', // Dark gray text color
        bgColor: (opacity) => `rgba(75, 85, 99, ${opacity})`, // Dark gray background color with opacity
    },
    {
        name: 'purple',
        text: '#8B5CF6', // Purple text color
        bgColor: (opacity) => `rgba(139, 92, 246, ${opacity})`, // Purple background color with opacity
    },
    {
        name: 'green',
        text: '#10B981', // Green text color
        bgColor: (opacity) => `rgba(16, 185, 129, ${opacity})`, // Green background color with opacity
    },
    {
        name: 'teal',
        text: '#14B8A6', // Teal text color
        bgColor: (opacity) => `rgba(20, 184, 166, ${opacity})`, // Teal background color with opacity
    },
    {
        name: 'red',
        text: '#EF4444', // Red text color
        bgColor: (opacity) => `rgba(239, 68, 68, ${opacity})`, // Red background color with opacity
    }
];




export const themeColours=
{
    ...colorPalette[5]
}