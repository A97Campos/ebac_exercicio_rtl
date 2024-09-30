import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adicionar 2 comentários', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('comentarTexto'), {
            target: {
                value: 'Comentario sendo adicionado para testes'
            }
        });
        fireEvent.click(screen.getByTestId('comentarButton'))

        fireEvent.change(screen.getByTestId('comentarTexto'), {
            target: {
                value: 'Segundo comentario sendo adicionado para testes'
            }
        });
        fireEvent.click(screen.getByTestId('comentarButton'))

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    });
});

