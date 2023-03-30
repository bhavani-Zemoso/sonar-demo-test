// eslint-disable-next-line import/no-anonymous-default-export
export default {
	transform: {
		'.+\\.(css|scss|png|jpg|svg|webp|gif)$': 'jest-transform-stub',
	},
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	modulePathIgnorePatterns: ['<rootDir>/backend'],
};
