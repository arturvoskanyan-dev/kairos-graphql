import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { genreMock } from '../mock/animeMocks';
import { MockedProvider } from '@apollo/client/testing/react';
import Genres from '@/components/layout/genres';

describe('Genres component', () => {
    beforeEach(() => {
        render(
            <MockedProvider mocks={[genreMock]}>
                <Genres />
            </MockedProvider>
        );
    });

    test('renders genres and their items', async () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Action')).toBeInTheDocument();
        });

        const actionImage = await screen.findByAltText('Image 1');
        expect(actionImage).toBeInTheDocument()
    });
});
