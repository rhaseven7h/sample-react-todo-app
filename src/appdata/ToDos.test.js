import axios from "axios";
import ToDos from "./ToDos";

const mockURI = 'http:/some.server/resource';
const mockToDosList = [
    { id: 1, title: 'One', done: false },
    { id: 2, title: 'Two', done: true },
    { id: 3, title: 'Three', done: true }
];

jest.mock('axios');

describe('ToDos Data Access Layer', function() {
    it('should be creatable providing a base endpoint', function() {
        expect(() => new ToDos(mockURI)).not.toThrowError();
    });
    it('should throw an error if no base endpoint is provided', function() {
        expect(() => new ToDos()).toThrowError(/missing/);
    });
    it('should throw an error if a null base endpoint is provided', function() {
        expect(() => new ToDos(null)).toThrowError(/missing/);
    });
});

describe('ToDos DAL List', function() {
    it('should provide a list of ToDos', async function() {
        const toDos = new ToDos(mockURI);
        axios.get.mockResolvedValue(mockToDosList);
        expect(() => toDos.list()).not.toThrowError();
        await expect(toDos.list()).resolves.toBe(mockToDosList);
    });
    it('should reject when there\'s a network error', async function() {
        const toDos = new ToDos(mockURI);
        axios.get.mockRejectedValue(new Error('mock network error'));
        await expect(() => toDos.list()).rejects.toThrowError(/network error/);
    });
});

describe('ToDos DAL Create', function() {
    it('should be able to create a To-Do', async function() {
        const mockTitle = 'A new To-Do!';
        const toDos = new ToDos(mockURI);
        axios.post.mockResolvedValue({
            status: 200,
            statusText: 'OK',
            data: { some: 'bogus data' }
        })
        await expect(toDos.create(mockTitle))
            .resolves
            .toMatchObject({
                status: 200,
                statusText: 'OK',
            });
    });
});

describe('ToDos DAL Update', function() {
    it('should be able to update a To-Do', async function() {
        const toDos = new ToDos(mockURI);
        axios.patch.mockResolvedValue({
            status: 200,
            statusText: 'OK',
            data: { some: 'bogus data' }
        })
        await expect(toDos.update(7, true))
            .resolves
            .toMatchObject({
                status: 200,
                statusText: 'OK',
            });
    });
});

describe('ToDos DAL Delete', function() {
    it('should be able to delete a To-Do', async function() {
        const toDos = new ToDos(mockURI);
        axios.delete.mockResolvedValue({
            status: 200,
            statusText: 'OK',
            data: { some: 'bogus data' }
        })
        await expect(toDos.delete(7))
            .resolves
            .toMatchObject({
                status: 200,
                statusText: 'OK',
            });
    });
});
