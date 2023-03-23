import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import HomeScreen from './HomeScreen';

jest.mock('axios');
 

const mockPosts = [
  {
    objectID: '1',
    title: 'Test Post 1',
    url: 'https://testurl.com/post1',
    created_at: '2022-03-21T19:10:06.000Z',
    author: 'Test Author 1',
  },
  {
    objectID: '2',
    title: 'Test Post 2',
    url: 'https://testurl.com/post2',
    created_at: '2022-03-20T19:10:06.000Z',
    author: 'Test Author 2',
  },
];
describe('HomeScreen component', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
  
    afterEach(() => {
      jest.clearAllTimers();
      jest.resetAllMocks();
    });
  
    it('renders correctly', async () => {
       
  
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('https://testurl.com/post1')).toBeInTheDocument();
      expect(screen.getByText('Test Author 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
      expect(screen.getByText('https://testurl.com/post2')).toBeInTheDocument();
      expect(screen.getByText('Test Author 2')).toBeInTheDocument();
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
      jest.advanceTimersByTime(10000);
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
  
});
  
  
  
  




describe('HomeScreen component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<HomeScreen />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should fetch posts on mount', async () => {
    const data = { hits: [{ objectID: '1', title: 'Test title', url: 'https://test.com', created_at: '2022-03-21T20:51:09.000Z', author: 'Test author' }] };
    // axios.get.mockResolvedValue({ data });

    await wrapper.instance().componentDidMount();
    wrapper.update();

    expect(axios.get).toHaveBeenCalledWith('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0');
    expect(wrapper.state('posts')).toEqual(data.hits);
  });

  it('should navigate to DetailsScreen on post click', () => {
    const navigation = { navigate: jest.fn() };
    wrapper.setProps({ navigation });
    wrapper.find('.item').first().simulate('click');
    expect(navigation.navigate).toHaveBeenCalledWith('/DetailScreen', { state: { json: wrapper.state('posts')[0] } });
  });
});
