function skillsMember() {
    return {
        name: 'skills',
        description: 'Get the skills of a member',
        options: [
        {
            name: 'member',
            description: 'The member to get the skills of',
            type: 6,
            required: true,
        },
        ],
    };
}